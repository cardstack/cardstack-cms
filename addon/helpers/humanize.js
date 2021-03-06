import { helper } from 'ember-helper';
import { capitalize } from 'ember-string';

export default helper(function([a]) {
  if (a) {
    return humanize(a);
  }
});

export function humanize(string) {
  return capitalize(string).replace(/([a-z])([A-Z])/g, function(all, low, upper) {
    return `${low} ${upper}`;
  }).replace(/-([a-zA-Z])/g, function(all, follower){
    return ` ${follower.toUpperCase()}`;
  });
}
