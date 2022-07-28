import { _decorator, Component, Node, AudioSource, EventMouse } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('buttons')
export class buttons extends Component {
    time: number = 0
    audio: AudioSource

    onLoad() {
        this.audio = this.getComponent(AudioSource)
        this.node.on(Node.EventType.MOUSE_ENTER, (event: EventMouse) => {
            console.log(this.name)
            if (event.getButton() === 0){
                this.audio.play();
            }
            

        }, this);
    }


    update(deltatime: number) {
            

        if (this.audio.playing == false) {
            this.time = 0
        }
        this.time += deltatime

    }
    onEnable() {

    }




    onClick() {
        this.getComponent(AudioSource).play();
    }
}

