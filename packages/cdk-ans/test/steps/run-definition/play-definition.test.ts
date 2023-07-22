import { App, Play } from '../../../src';

describe('PlayDefinition', () => {
  test('should be able to chain plays', () => {
    const app = new App();

    const playProps = { hosts: [] };

    const play = new Play(app, 'play1', playProps);
    const play2 = new Play(app, 'play2', playProps);
    const play3 = new Play(app, 'play3', playProps);
    const play4 = new Play(app, 'play4', playProps);

    const chain1 = play.next(play2);
    const chain2 = play3.next(play4);
    const all = chain1.next(chain2);

    expect(all.chain.length).toEqual(4);

    all.chain.forEach((p, i) => {
      expect(p.name).toEqual(`play${i + 1}`);
    });
  });

  test('should be able to chain with plays or chains', () => {
    const app = new App();

    const playProps = { hosts: [] };

    const play = new Play(app, 'play1', playProps);
    const play2 = new Play(app, 'play2', playProps);
    const play3 = new Play(app, 'play3', playProps);
    const play4 = new Play(app, 'play4', playProps);
    const play5 = new Play(app, 'play5', playProps);

    const chain1 = play.next(play2);
    const chain2 = play3.next(play4);
    const all = chain1.next(chain2).next(play5);

    expect(all.chain.length).toEqual(5);

    all.chain.forEach((p, i) => {
      expect(p.name).toEqual(`play${i + 1}`);
    });
  });
});