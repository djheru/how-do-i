jest.dontMock('../');
jest.dontMock('lodash');
jest.dontMock('../../array');
jest.dontMock('../../object');
jest.dontMock('../../monad/maybe');

import auth from '../';

describe('auth', function () {
  it('can generate an auth link', function () {
    let link = auth.link('myclient', 'myredirect');
    let expected = 'https://accounts.google.com/o/oauth2/auth?client_id=myclient&redirect_uri=myredirect&scope=' + encodeURIComponent('https://www.googleapis.com/auth/youtube') + '&response_type=token';
    expect(link).toEqual(expected);
  });

  it('can parse a fragment for a token', function () {
    let jwt = auth.parse('#access_token=mytoken&token_type=Bearer&expires_in=3600')
    expect(jwt).toEqual({
      access_token:'mytoken',
      token_type: 'Bearer',
      expires_in: 3600
    });
  });

  it('can handle parsing an invalid fragment', function () {
    expect(auth.parse('whaatttt??')).toBeUndefined();
  });
});