export default class UIUtils {
	static delay = (duration) => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(), duration);
		});
	};
}
