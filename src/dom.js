/**
 * Created by yeyangmei on 16/11/15.
 */
import styles from './style.css';
import assign from 'object-assign';
import tpl from './nav.pug';

export default function (data) {
  return tpl(assign({
    styles,
  }, data));
}