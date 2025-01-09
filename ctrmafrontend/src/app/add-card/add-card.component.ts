import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
  cardForm: FormGroup
  fieldsMetadata: any[] = [] // Array to store field metadata

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    // Initialize an empty form
    this.cardForm = this.fb.group({})

    // Fetch the fields metadata from the Payload CMS API
    this.http.get<any[]>('http://localhost:3000/api/cards').subscribe((data) => {
      this.fieldsMetadata = data // Store the field metadata
      this.createForm()
    })
  }

  // Dynamically create the form based on the metadata
  createForm() {
    const formGroup = {}

    // Loop through the fieldsMetadata and create form controls
    this.fieldsMetadata.forEach((field) => {
      const validators = []
      if (field.required) {
        validators.push(Validators.required)
      }

      // Create a form control for each field
      formGroup[field.name] = ['', validators]
    })

    // Set the formGroup to the cardForm
    this.cardForm = this.fb.group(formGroup)
  }

  // Handle form submission
  onSubmit(): void {
    if (this.cardForm.valid) {
      const cardData = this.cardForm.value

      // Send the data to Payload CMS API
      this.http.post('http://localhost:3000/api/cards', cardData).subscribe(
        (response) => {
          console.log('Card added successfully:', response)
          alert('Card added successfully!')
        },
        (error) => {
          console.error('Error adding card:', error)
          alert('Failed to add card')
        },
      )
    } else {
      alert('Please fill out all required fields')
    }
  }
}
