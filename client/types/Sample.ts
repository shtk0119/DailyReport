export type  SampleItem = Pick<SampleItemResponse, 'id' | "text" |"created_at" | "updated_at">

export interface SampleItemResponse {
    id: number,
    text: string,
    updated_at: any,
    created_at: any
}