export class TempText {

  public static readonly tempTitle = "Sample post";
  public static readonly tempContent: string ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  public static readonly tempCode: string = `@import url(http://fonts.googleapis.com/css?family=Questrial);
@import url(http://fonts.googleapis.com/css?family=Arvo);

@font-face {
	src: url(http://lea.verou.me/logo.otf);
	font-family: 'LeaVerou';
}

/*
 Shared styles
 */
 
section h1,
#features li strong,
header h2,
footer p {
	font: 100% Rockwell, Arvo, serif;
}`;

  private value = "";

  public this() {
      return this;
  }

  public getValue(): string {
    return this.value;
  }

  public code(): TempText {
      this.value += TempText.tempCode;
      return this;
  }

  public title(): TempText {
    this.value += TempText.tempTitle;
    return this;
  }

  public content(): TempText {
      this.value += TempText.tempContent;
      return this;
  }

  public pre(s: string): TempText {
      this.value = s + this.value;
      return this;
  }

  public post(s: string): TempText {
      this.value = this.value + s;
      return this;
  }

  public wrapHtml(tag: string): TempText {
      this.value = "<" + tag + ">" + this.value + "<" + tag + ">";
      return this;
  }

  public wrap(w: string): TempText {
      this.value = w + this.value + w;
      return this;
  }

  public newLine(): TempText {
      this.value += "\n";
      return this;
  }

  public addScript(): TempText {
      this.value = this.value + "<script>alert('test');<\/script>";
      return this;
  }
}
