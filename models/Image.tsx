class Image {
  id: string;
  download_url: string;

  constructor(id: string, download_url: string) {
    this.id = id;
    this.download_url = download_url;
  }
}
export default Image;
