// this is not sustainable for big projects, but good enough for small ones

export interface IndexableObject {
    [index: string]: string | number | undefined;
}