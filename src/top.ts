export class Top {
    public static parameters: string[] = ['id'];
    public id: string;

    public load(params) {
        this.id = params.id;
    }
}
