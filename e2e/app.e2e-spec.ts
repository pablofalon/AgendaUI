import { AgendaUIPage } from './app.po';

describe('agenda-ui App', () => {
  let page: AgendaUIPage;

  beforeEach(() => {
    page = new AgendaUIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
