import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

const createLive = () => navigation.navigate("Live", { type: "create", channel: uuid() });

const joinLive = () => navigation.navigate("Live", { type: "join", channel: joinChannel });

