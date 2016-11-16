/**
 * Created by yeyangmei on 16/11/11.
 */
import assign from 'object-assign';
import $ from 'jquery';
import createDom from './dom';
import styles from './style.css';


const defaultOptions = {
  width: 220,
};

function getClassName(ctx, width) {
  return  ctx.width() === width ? styles.sup_li_hover : styles.sup_li_small_hover;
}

$.fn.biNav = function (data, userOption = {}) {
  const option = assign({}, defaultOptions, userOption);
  const $this = $(this);
  const element = createDom(data);

  console.log(element);

  $this.append(element);

  $(`.${styles.sup_li}`)
    .hover(function enter() {
        const $this1 = $(this);
        $this1.addClass(getClassName($this1, option.width));
      }, function leave() {
        const $this1 = $(this);
        $this1.removeClass(getClassName($this1, option.width));
      }
    );

  $(`.${styles.sub_li}`)
    .click(function(e) {
      const that = this;
      console.log(this);
      //if (e.tartet !== that) return;
      $(this).siblings().find('ul').slideUp();

      $(this).find('ul').slideToggle();
    })
};