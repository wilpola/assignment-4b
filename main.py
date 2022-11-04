# A simple calculator application
# Author: @Ville Wilpola

# import Tkinter for GUI
import tkinter as tk

class main():

    
    # Set up the GUI 
    root = tk.Tk()                    # Creates the window
    root.title('Simple Calculator')   # Set the window title
    root.geometry("400x500+10+20")    # Sets the window size


    def setFrame(self, frame):
        frame.tkraise()

    additionFrame = tk.Frame(root)
    subtractionFrame = tk.Frame(root)

    v=tk.IntVar()
    val = 1

    # Create a label
    spacer = tk.Label(root, text='', height=1).grid(row=0, column=0, columnspan=4)
    homepageHeader = tk.Label(root, text='Choose your preferred operation', font=("Robot", 18), ).grid(row=1, column=0, columnspan=4)
    spacer1 = tk.Label(root, text='', height=1).grid(row=2, column=0, columnspan=4)


    button_width = 13
    selectionRowId = 3

    # Creating the calculation buttons
    additionBtn = tk.Button(
        root, 
        text='Addition', 
        width=button_width, 
        command=lambda:main.setFrame(main.additionFrame)).grid(
            row=selectionRowId, 
            column=0
        )
    subtractionBtn = tk.Button(root, text='Subtraction', width=button_width).grid(row=selectionRowId, column=1)
    multiplicationBtn = tk.Button(root, text='Multiplication', width=button_width).grid(row=selectionRowId, column=2)
    divisionBtn = tk.Button(root, text='Division', width=button_width).grid(row=selectionRowId, column=3)
    

    root.resizable(False,False)       # Disable window resize
    root.mainloop()                   # Adds the window to the main loop, and creates it on app load

main()
