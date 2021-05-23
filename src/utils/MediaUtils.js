export default class MediaUtils {
	static fadeTimer = 0;
	static audioPlayFadeIn = (audio) => {
		clearTimeout(this.fadeTimer);
		audio.volume = 0;
		audio.currentTime = 0;
		audio.play();
		this.audioFadeIn(audio);
	};
	static audioFadeIn = (audio) => {
		clearTimeout(this.fadeTimer);
		if (audio.volume < 0.01) {
			audio.volume = audio.volume + 0.0001;
			this.fadeTimer = setTimeout(() => this.audioFadeIn(audio), 500);
		}
	};
}
