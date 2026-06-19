"use client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import { ToastBar } from "react-hot-toast";

const DeleteBookingBtn = ({ b }) => {

  const router = useRouter();

  const handleBookingCancel = async() =>{
    const res = await fetch(`${process.env.SERVER_URL}/booking/${b._id}`, {
       method : "DELETE",
            headers : {
                'content-type' : 'application/json'
            }
    });
    if(res.ok){
            const data = res.json();
            router.refresh();
            alert("Destination updated successfully!");
    }
  }


    return ( 
         <AlertDialog>
      <Button variant="danger" className="rounded-md">cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Destination</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete your booked destination
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleBookingCancel} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default DeleteBookingBtn;