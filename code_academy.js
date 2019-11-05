// Constructor function
function LinkedList() {
  var length = 0;
  var head = null;

  // Object
  var Node = function(element){
    this.element = element;
    this.next = null;
  };
  // Function
  this.head = function(){
    return head;
  };

  // Function
  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Object
    var node = new Node(element)

    if(head === null){
      head = node;
      length+=1;
    }
    else{
      let previous = head;
      while(previous.next !== null){
        previous = previous.next;
      }
      previous.next = node;
      length+=1;
    }
  };
}

const list = new LinkedList()
list.add(3)
