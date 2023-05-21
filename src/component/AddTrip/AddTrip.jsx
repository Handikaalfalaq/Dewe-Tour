import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormDisabledExample() {
  return (
    <Form style={{padding:'108px 118px', position:'relative'}}>
        <div style={{fontSize:'36px', marginBottom:'42px'}}>Add Trip</div>
        <Form.Group className="mb-3">
            <Form.Label >Title Trip</Form.Label>
            <Form.Control style={{width:'1204px'}}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Select style={{width:'1204px'}}>
            <option>Australia</option>
            <option>Japan</option>
            <option>Korea Selatan</option>
            <option>Lampung</option>
            <option>Papua</option>
            <option>Nusa Tenggara Timur</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Accomodation</Form.Label>
            <Form.Control style={{width:'1204px'}}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Transportation</Form.Label>
            <Form.Control style={{width:'1204px'}}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Eat</Form.Label>
            <Form.Control style={{width:'1204px'}}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Duration</Form.Label>
            <div style={{display:'flex'}}>
                <Form.Control style={{width:'228px'}}/> Days
                <Form.Control style={{width:'228px'}}/> Night
            </div>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Date Trip</Form.Label>
            <Form.Control style={{width:'1204px'}}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control style={{width:'1204px'}}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Quota</Form.Label>
            <Form.Control style={{width:'1204px'}}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control style={{width:'1204px', height:'117px'}}/>
        </Form.Group>
    

        <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
        </Form.Group>

      <Button type="submit"  style={{width:'150px', position:'absolute', left:'650px', bottom:'10px'}}>Submit</Button>
    </Form>
  );
}

export default FormDisabledExample;
