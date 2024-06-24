"use client";
import React, { useState } from "react";
import { Button } from "../../../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";
import { Input } from "../../../@/components/ui/input";
import { Textarea } from "../../../@/components/ui/textarea";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(jobPosition, jobDesc, jobExperience)
  }
  
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add details about your job position/role, Job description
                    and job experience
                  </h2>

                  <div className="mt-8 my-2">
                    <label>Job Role/ Job Position</label>
                    <Input placeholder="Ex. Full Stack developer" required onChange={(event)=>setJobPosition(event.target.value)}/>
                  </div>

                  <div className="my-3">
                    <label>Job Description/ Tech Stack</label>
                    <Textarea placeholder="Ex. Mongodb, SQl, Backend, etc." required onChange={(event)=>setJobDesc(event.target.value)}/>
                  </div>

                  <div className="my-4">
                    <label>Year of experience</label>
                    <Input placeholder="5+ yrs" type="number" required onChange={(event)=>setJobExperience(event.target.value)}/>
                  </div>
                </div>
              </form>
              <div className="flex gap-4 justify-end">
                <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
                  Cancel
                </Button>
                <Button type="submit">Start</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;

