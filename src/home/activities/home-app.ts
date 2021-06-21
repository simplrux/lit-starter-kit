import { CtLit, html, property, customElement } from '@conectate/ct-lit';
import * as firebase from "firebase/firestore";
import { collection, addDoc, query, getDocs, where, orderBy, startAt, endAt, limit } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { onSnapshot } from "firebase/firestore";
import { DocumentData } from '@firebase/firestore-types';
import { ifDefined } from 'lit/directives/if-defined';

interface Message {
	gifUrl?: string;
	msg: string;
	time: number;
	sender: string;
}

@customElement('home-app')
export class HomeApp extends CtLit {

	unsubscribe: Function = () => { };
	db: any;
	shadowRoot: any;
	userName = this.assignId();
	reading = false;
	exclude: string[] = ['you', 'is', 'the', 'they', 'them', 'he', 'she', 'it',
		'am', 'my', 'i', 'are', 'how', 'what', 'why'];
	@property({ type: Array }) msgs: Message[] = [];


	constructor() {
		super();
		this.initFirebase();
		this.focusInput();
	}

	initFirebase() {
		const firebaseConfig = {
			apiKey: "AIzaSyBVY5QVSXVlrCpjaBykH13eP5JGlgnQBBk",
			authDomain: "litbot-afd7a.firebaseapp.com",
			projectId: "litbot-afd7a",
			storageBucket: "litbot-afd7a.appspot.com",
			messagingSenderId: "165785304938",
			appId: "1:165785304938:web:d1587b0791b17c6f5a6f13"
		};
		initializeApp(firebaseConfig);
		this.db = firebase.getFirestore();
		this.read();
	}


	private async send(msg: string, sender: string, el?: any) {
		if (el?.target?.value) {
			el.target.value = '';
		}
		try {
			await addDoc(collection(this.db, "chat"), {
				msg,
				time: new Date(),
				sender
			});
		} catch (e) {
			console.log(e);
		}
		this.scrollToBottom();
	}


	async focusInput() {
		await this.updateComplete;
		const input: HTMLElement = this.shadowRoot.getElementById('chatInput');
		input.focus();
	}

	async scrollToBottom() {
		const scroller: HTMLElement = this.shadowRoot.getElementById('scroller');
		scroller.scrollTop = scroller.scrollHeight;
	}

	private async read() {
		const q = firebase.query(collection(this.db, "chat"), firebase.orderBy('time', 'desc'), limit(1));
		this.unsubscribe = onSnapshot(q, (querySnapshot: DocumentData) => {
			if (querySnapshot.docs.length > 0 && this.reading) {
				const data: Message = querySnapshot.docs[0].data();
				this.msgs = [...this.msgs, ...[data]];
				if (data.msg.includes('?')) {
					this.checkIfAnswered(data);
				}
			} else {
				this.reading = true;
			}
		});
	}

	formatString(str: string) {
		return str.toLowerCase().replace(/[^a-zA-Z ]/g, "");
	}

	compareStrings(str1: string, str2: string): string[] {
		const arr = [];
		let words1 = str1.split(/\s+/g),
			words2 = str2.split(/\s+/g),
			i,
			j;
		for (i = 0; i < words1.length; i++) {
			for (j = 0; j < words2.length; j++) {
				if (this.formatString(words1[i]) == this.formatString(words2[j]) && !this.exclude.includes(words1[i])) {
					arr.push(words1[i]);
				}
			}
		}
		return arr;
	}

	private async checkIfAnswered(data: Message) {
		const q = collection(this.db, "chat");
		const querySnapshot = await getDocs(q);
		const possibleAnsweres = querySnapshot.docs.filter((doc: DocumentData) => this.validate(doc.data(), data));
		if (possibleAnsweres.length > 0) {
			const docData = possibleAnsweres[0].data() as Message;
			this.requestUpdate();
			const randomRick = Math.floor(Math.random() * 8) + 1;
			this.msgs = [...this.msgs, ...[{
				gifUrl: `rick${randomRick}.gif`,
				msg: `was probably answered by @${docData.sender} at ${this.convertTimestamp(docData.time)}: "${docData.msg}"`,
				sender: 'rickBot', time: Date.now() / 1000
			}]];
			setTimeout(() => {
				this.scrollToBottom();
			}, 500);
		}
	}

	validate(msg1: Message, msg2: Message) {
		return !msg1.msg.includes('?')
			&& this.compareStrings(msg1.msg, msg2.msg).length > 0
			// && msg1.sender !== this.userName
			&& msg1.msg.split(' ').length > 0;
	}

	stopReading() {
		this.unsubscribe();
	}

	convertTimestamp(unix_timestamp: number) {
		const date = new Date(unix_timestamp * 1000);
		const hours = date.getHours();
		const minutes = "0" + date.getMinutes();
		const seconds = "0" + date.getSeconds();
		const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
		return formattedTime;
	}

	private assignId() {
		return '_' + Math.random().toString(36).substr(2, 5);
	}

	render() {
		return html` 
 		      <link rel="stylesheet" href="../style.css">
			   <div class="chat-wrap">
        <div class="chat">
            <div class="top">
                
                <div class="top_cam">

                </div>
                <div class="top_speaker"></div>
            </div>
            <div class="screen">
                <div class="screen_inner" >
                  
                <form onsubmit="return false">
                <input id="chatInput" @change="${(e: any) => this.send(e.target.value, this.userName, e)}" placeholder="Type a message..." type="text"/>
                 </form>
				 <ul class="screen_inner_view" id="scroller">

				 <li class="intro">
					 <span>
					 ${this.convertTimestamp(Date.now() / 1000)}
						 </span>
					 <br>
					 <span>
					 this chat is unencrypted, unsecure and probably totally useless,
						 have fun!
					 </span>
				 </li>

   				   ${this.msgs.map((msg) =>
			html`<li class="${msg.sender !== this.userName ? 'guest' : 'user'}">
				<div class="message">
				<span class="details">
					<span>				${msg.sender === this.userName ? 'you (' + this.userName + ')' : msg.sender}
						</span>
					<span>				${this.convertTimestamp(msg.time)}
					</span>
				</span>
					<img src="assets/${ifDefined(msg.gifUrl)}">
					<span>
						${msg.msg}
					</span>
				</div>

				</li>`
		)}
    			</ul>
			
                </div>
            </div>
            <div class="bottom">
				<button class="help">?</button>
</div>
        
        </div>
    </div>
			`;
	}


}

