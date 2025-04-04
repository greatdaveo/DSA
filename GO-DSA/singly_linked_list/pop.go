package main

import (
	"fmt"
)

type Node struct {
	val  string
	next *Node
}

type SingleLinkedList struct {
	head   *Node
	tail   *Node
	length int
}

func (s *SingleLinkedList) Push(val string) {
	newNode := &Node{val: val}
	if s.head == nil {
		s.head = newNode
		s.tail = newNode
	} else {
		s.tail.next = newNode
		s.tail = newNode
	}

	s.length++

}

func (s *SingleLinkedList) Pop() *Node {
	if s.head == nil {
		return nil
	}

	current := s.head
	newTail := current

	for current.next != nil {
		newTail = current
		current = current.next
	}

	s.tail = newTail
	s.tail.next = nil
	s.length--

	if s.length == 0 {
		s.head = nil
		s.tail = nil
	}

	return current

}

func (s *SingleLinkedList) PrintList() {
	current := s.head
	for current != nil {
		fmt.Printf("%s -> ", current.val)
		current = current.next
	}

	fmt.Println("NULL")
}

func main() {
	list := &SingleLinkedList{}
	list.Push("Hello")
	list.Push("Goodbye")
	list.Push("!")
	list.PrintList()

	list.Pop()
	list.PrintList()
}
