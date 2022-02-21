import {getGifs} from "../../helpers/GetGifs";

describe('test with Getgifs', () => {
  test('should get 10 elements', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

});
