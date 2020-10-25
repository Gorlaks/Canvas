import languageRepository from "../initialize/repositories/languageRepository";

/** @description For translate. */
export const LS = (sentense: string): string => {
	return languageRepository.translate(sentense);
}

/**
 * @description Increases the number of lines by 1 after pressing enter.
 * e props - textarea data.
 * @event
*/
export const newStrokeInTextArea = (e: any) => {
	if (e.charCode === 13) {
		e.target.rows += 1;
	}
}

/**
 * @description Increases height of the textarea window if the text exceeds the width.
 * e props - textarea data
 * @event
*/
export const resizeContainer = (e: any) => {
	if (e.target.scrollTop > 0) {
		e.target.style.height = e.target.scrollHeight + "px";
	}
}

/**
 * @description For searching by name and word cropping for highlighting.
*/
export const similarityWordSearchWithHighlighting = (str: string, chunk: string): Array<string> => {
	const regExp: RegExp = new RegExp(`(${chunk})`);
	/** @description checking the word for coincidence. */
	const isSimilar: boolean = str.includes(chunk);
	let leftSideAfterSlice: string = "",
		rightSideAfterSlice: string = "";

	/** @description word cropping for highlighting */
	if (isSimilar) {
		const sliceStr: string = str.replace(regExp, " ");
		let newStr: string = "";

		for (let i = 0; i < sliceStr.length; i++) {
			if (sliceStr[i] === " ") {
				leftSideAfterSlice += newStr;
				newStr = "";
			} else newStr += sliceStr[i]
		}

		rightSideAfterSlice += newStr;
		return [leftSideAfterSlice, chunk, rightSideAfterSlice];
	}
	return [];
}