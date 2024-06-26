export const formatMessageDateLong = (date) => {
    const now = new Date();
    const inputDate = new Date(date);
    if (isToday(inputDate)) {
        return inputDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    } else if (isYesterday(inputDate)) {
        return (
            "Yestrday " +
            inputDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            })
        );
    } else if (inputDate.getFullYear === now.getFullYear()) {
        return inputDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "short",
        });
    } else {
        return inputDate.toLocaleDateString();
    }
};
export const formatMessageDateShort = (date) => {
    const now = new Date();
    const inputDate = new Date(date);

    if (isToday(inputDate)) {
        return inputDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    } else if (isYesterday(inputDate)) {
        return "Yestrday";
    } else if (inputDate.getFullYear === now.getFullYear()) {
        return inputDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "short",
        });
    } else {
        return inputDate.toLocaleDateString();
    }
};

export const isToday = (date) => {
    const today = new Date();
    return(
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getYear() === today.getYear()
    );
};
export const isYesterday = (date) => {
    const yestrday = new Date();
    yestrday.setDate(yestrday.getDate() - 1);
    return(
        date.getDate() === yestrday.getDate() &&
        date.getMonth() === yestrday.getMonth() &&
        date.getYear() === yestrday.getYear()
    );
};
