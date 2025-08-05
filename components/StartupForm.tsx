"use client"

import React, { useState } from 'react'
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { Send } from 'lucide-react';


const StartupForm = () => {
  const [errors, seterrors] = useState<Record<string, string>>({});
  const [pitch, setpitch] = useState("");
  const isPending = false;


  return (
    <div className='section-container'>
      <form action={() => { }} className='startup-form'>
        <div>
          <label htmlFor="title" className='startup-form_label'>Title</label>
          <input
            id="title"
            name="title"
            required
            placeholder="Startup Title"
            className="startup-form_input"
          />
          {errors.title && <p className='startup-form_errors'>
            {
              errors.title
            }
          </p>}
        </div>

        <div>
          <label htmlFor="description" className='startup-form_label'>Description</label>
          <Textarea
            id="description"
            name="description"
            required
            placeholder="Startup Description"
            className="startup-form_textarea"
          />
          {errors.description && <p className='startup-form_errors'>
            {
              errors.description
            }
          </p>}
        </div>

        <div>
          <label htmlFor="category" className='startup-form_label'>CATEGORY</label>
          <input
            id="category"
            name="category"
            required
            placeholder="Startup Category (Health, AI, Finance)"
            className="startup-form_input"
          />
          {errors.category && <p className='startup-form_errors'>
            {
              errors.category
            }
          </p>}
        </div>

        <div>
          <label htmlFor="link" className='startup-form_label'>Image URL</label>
          <input
            id="link"
            name="link"
            required
            placeholder="Startup Image URL"
            className="startup-form_input"
          />
          {errors.link && <p className='startup-form_errors'>
            {
              errors.link
            }
          </p>}
        </div>

        <div data-color-mode="light">
          <label htmlFor="link" className='startup-form_label'>Pitch</label>

          <MDEditor
            value={pitch}
            onChange={(value) => setpitch(value as string)}
            id="pitch"
            preview='edit'
            height={300}
            style={{ borderRadius: 20, overflow: "hidden" }}
            textareaProps={{
              placeholder:
                "Briefly describe your ideas & what problem it solves"
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />

          {errors.pitch && <p className='startup-form_errors'>
            {
              errors.pitch
            }
          </p>}
        </div>

        <Button type='submit' className='startup-form_btn text-white' disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Your Pitch"}
          <Send className='size-6 ml-2' />
        </Button>

      </form>
    </div>
  )
}

export default StartupForm;
