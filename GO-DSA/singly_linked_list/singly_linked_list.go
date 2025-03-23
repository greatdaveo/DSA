package main

import "fmt"

type Node struct {
	val  string
	next *Node
}

type SingleLinkedList struct {
	head   *Node
	tail   *Node
	length int
}

func (s *SingleLinkedList) Push(val string) *SingleLinkedList {
	newNode := &Node{val: val}
	if s.head == nil {
		s.head = newNode
		s.tail = newNode
	} else {
		s.tail.next = newNode
		s.tail = newNode
	}

	s.length++
	s.PrintList()
	return s
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
}
