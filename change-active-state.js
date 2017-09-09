(function(){

  /**
     * Get every element with attribute equals 'data-change-state'
     * @type {array}
     */
    var changeStateTargets = document.querySelectorAll('*[data-change-state]');

    /**
     * Change state of specific item by classname
     * @param  {string} classname
     */
    function changeState(classname) {
      var item = document.querySelector('.' + classname);
      if (!item) {
        return;
      }
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        return;
      }
      item.classList.add('active');
    }

    /**
     * Add event lsiteners to every element with attribute 'data-change-state'
     * @param  {array} changeStateTargets
     * @return {changeState}  Invoke changeState function on click
     */
    for (var i = 0; i < changeStateTargets.length; i++) {
      var item = changeStateTargets[i];
      item.addEventListener('click', function() {
        if (!item.getAttribute('data-change-state')) {
          return;
        }
        changeState(item.getAttribute('data-change-state'));
      }, false)
    }

}())
