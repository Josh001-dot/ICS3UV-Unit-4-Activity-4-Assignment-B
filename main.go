package main

import (
	"fmt"
	"math/rand"
	"time"
)

// Global variables
var (
	odometer    = 65000
	oilChangeKM = 65000
	carColor    = "Black"
	carModel    = "Civic"
	carMake     = "Honda"
	gasCost     [10]float64
	fillUpCount int
)

// Check if an oil change is needed
func oilChange(mileage int, oilChangeKM *int) bool {
	if mileage-*oilChangeKM >= 5000 {
		fmt.Println("An oil change was done.")
		*oilChangeKM = mileage
		return true
	}
	return false
}

// Display car stats
func carStats() {
	fmt.Printf("\nCar Make: %s\nCar Model: %s\nCar Color: %s\nOdometer: %d km\nLast Oil Change: %d km\n",
		carMake, carModel, carColor, odometer, oilChangeKM)
}

// Change car color
func wrapCar() {
	var newColor string
	fmt.Print("Enter a new color for your car: ")
	fmt.Scanln(&newColor)
	if newColor != "" {
		carColor = newColor
	}
}

// Drive car (random km 100–1000)
func drive() int {
	rand.Seed(time.Now().UnixNano())
	kmDriven := rand.Intn(901) + 100 // 100–1000
	odometer += kmDriven
	return kmDriven
}

// Fill up gas
func fillUp() {
	if fillUpCount >= len(gasCost) {
		fmt.Println("Gas cost array is full.")
		return
	}
	var cost float64
	fmt.Print("Enter cost to fill up gas: ")
	fmt.Scanln(&cost)
	gasCost[fillUpCount] = cost
	fillUpCount++
}

// Display gas costs and average
func displayCostToFillUp() float64 {
	total := 0.0
	fmt.Println("\nGas Fill-Up Costs:")
	for i := 0; i < fillUpCount; i++ {
		fmt.Printf("Fill-up %d: $%.2f\n", i+1, gasCost[i])
		total += gasCost[i]
	}
	average := total / float64(fillUpCount)
	fmt.Printf("Average cost per fill-up: $%.2f\n", average)
	return average
}

func main() {
	carStats()

	km := drive()
	fmt.Printf("You drove %d km.\n", km)

	if !oilChange(odometer, &oilChangeKM) {
		fmt.Println("Your car does not need an oil change.")
	}

	fillUp()
	fillUp()
	displayCostToFillUp()

	wrapCar()
	fmt.Printf("Your car is now %s.\n", carColor)

	carStats()
	fmt.Println("\nDone.")
}
