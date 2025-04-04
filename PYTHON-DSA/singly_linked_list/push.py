class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        self.print_list()

    def print_list(self):
        current = self.head
        while current:
            print(f"{current.val} -> ", end="")
            current = current.next
        print("NULL")


list = SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")
