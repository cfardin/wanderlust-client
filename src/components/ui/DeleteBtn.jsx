"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation"


const DeleteBtn = ({destination}) => {
    const router = useRouter();

    const {_id} = destination;


    const handleDelete = async() =>{
      const {data:tokenData} = await authClient.token();
      
      const res = await fetch(`${process.env.SERVER_URL}/destination/${_id}`, {
            method : "DELETE",
            headers : {
                'content-type' : 'application/json',
                authorization : `Bearer ${tokenData?.token}`
            }
      });

        if(res.ok){
            const data = res.json();
            router.push('/destinations');
            alert("Destination updated successfully!");
        }
    }

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteBtn;