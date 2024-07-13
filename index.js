document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
      // Event handling logic
      console.log('Button clicked!');
    });
  });
 // indexTest.js
describe('index.js', function() {
    it('binds an event listener', function() {
      const button = document.createElement('button');
      button.id = 'button';
      document.body.appendChild(button);
  
      // Simulate a click event
      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      button.dispatchEvent(event);
  
      // Assert that clicking the button logs 'Button clicked!'
      // This is just an example; adjust your assertions based on your actual test requirements
      assert.equal(console.log.callCount, 1);
      assert.equal(console.log.args[0][0], 'Button clicked!');
    });
  });
  