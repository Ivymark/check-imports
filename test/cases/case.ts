/* eslint-disable */
import { foo } from "./relative-dep-ts";
import pick from "lodash/pick";
const babelParser = require('@babel/parser');

declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}
