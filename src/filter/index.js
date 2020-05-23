import moment from "moment";

/**
 * 格式化时间
 * @param time
 * @param formatStr
 * @returns {string|null}
 */
export const timeFormat = (time,formatStr = "YYYY MM DD HH:mm:ss") => {
	if(!time) return null;
	return moment(time).format(formatStr);
};