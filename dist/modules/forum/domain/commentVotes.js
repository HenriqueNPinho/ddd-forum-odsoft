"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WatchedList_1 = require("../../../shared/domain/WatchedList");
class CommentVotes extends WatchedList_1.WatchedList {
    constructor(initialVotes) {
        super(initialVotes);
    }
    compareItems(a, b) {
        return a.equals(b);
    }
    static create(initialVotes) {
        return new CommentVotes(initialVotes ? initialVotes : []);
    }
}
exports.CommentVotes = CommentVotes;
//# sourceMappingURL=commentVotes.js.map