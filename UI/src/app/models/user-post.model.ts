export interface Post {
    id?: string;
    ProjectName: string;
    PEmail: string;
    description: string;
    Ptools: string;
    status: string;

}

export interface error {
    "headers": {
        "normalizedNames": {},
        "lazyUpdate": null
    },
    "status": null,
    "statusText": "",
    "url": "",
    "ok": boolean,
    "name": "",
    "message": "",
    "error": {
        "error": ""
    }
}