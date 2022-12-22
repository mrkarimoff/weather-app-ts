import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store";
import day1 from "./img/day1.jpg";
import day2 from "./img/day2.jpg";
import day3 from "./img/day3.jpg";
import night1 from "./img/night1.jpg";
import night2 from "./img/night2.jpg";
const date = new Date();
const time = Number(
  date
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    })
    .slice(0, 2)
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

if (time >= 18 && time <= 23) {
  document.body.style.backgroundImage = `url(${night2})`;
} else if (time >= 0 && time < 6) {
  document.body.style.backgroundImage = `url(${night1})`;
} else if (time >= 6 && time < 10) {
  document.body.style.backgroundImage = `url(${day1})`;
} else if (time >= 10 && time < 14) {
  document.body.style.backgroundImage = `url(${day2})`;
} else if (time >= 14 && time < 18) {
  document.body.style.backgroundImage = `url(${day3})`;
}
