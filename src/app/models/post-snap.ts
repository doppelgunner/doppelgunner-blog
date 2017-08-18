import { Post } from '../models';

export class PostSnap extends Post {
    public $key;

    constructor(public snap: any) {
        super(snap.val().title,snap.val().content,snap.val().createdAt,snap.val().lastUpdate);
        this.$key = snap.key;
    }
}
