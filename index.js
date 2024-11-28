import { formatDistanceToNow } from "date-fns";

const date = "2004-10-24 00:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;