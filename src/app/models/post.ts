export class Post {

    constructor(public title: string, public content: string, public createdAt: any, public lastUpdate: any) {}

    clone(): Post {
        let newPost = new Post(this.title,this.content, this.createdAt, this.lastUpdate);
        return newPost;
    }
}
