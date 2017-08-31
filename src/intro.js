import * as R from 'ramda';

const moo = R.prop('moo');
const value = moo({moo: 'cow'});

export const logValue = () => console.log(value);
