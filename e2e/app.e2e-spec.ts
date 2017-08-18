import { YoutubeStreamRadioPage } from './app.po';

describe('youtube-stream-radio App', () => {
  let page: YoutubeStreamRadioPage;

  beforeEach(() => {
    page = new YoutubeStreamRadioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
