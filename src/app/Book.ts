import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Book {
  // title: string;
  // author: string;
  // description: string;
  // imageurl: string;


  @JsonProperty("author", String)
  _author: string = undefined;
  get author(){return this._author}

  @JsonProperty("country", String)
  _country: string = undefined;
  get country(){return this._country}

  @JsonProperty("imageLink", String)
  _imageLink: string = undefined;
  get imageLink(){return this._imageLink}

  @JsonProperty("language", String)
  _language: string = undefined;
  get language(){return this._language}

  @JsonProperty("link", String)
  _link: string = undefined;
  get link(){return this._link}

  @JsonProperty("pages", Number)
  private _pages: number = undefined;
  get pages() { return this._pages; }


  @JsonProperty("title", String)
  _title: string = undefined;
  get title(){return this._title}

  @JsonProperty("year", Number)
  private _year: number = undefined;
  get year() { return this._year; }


}
