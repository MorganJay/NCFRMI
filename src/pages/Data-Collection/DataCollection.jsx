import React from "react";
import { Container, Input } from "reactstrap";
import "../Data-Collection/DataCollection.style.css";

const DataCollection = () => {
  return (
    <Container className="container-all">
      <div className="child-container">
        <h2>IDP Camp Database Form</h2>
        <form>
          <div className="form-group">
            <h4>
              First name <span className="text-danger">*</span>
            </h4>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <h4>
              Last name <span className="text-danger">*</span>
            </h4>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <h4>
              Other name <span className="text-danger">*</span>
            </h4>
            <Input
              type="text"
              name="othername"
              id="othername"
              placeholder="othername"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <h4>
              Sex <span className="text-danger">*</span>
            </h4>

            <Input type="radio" id="sex" name="Male" label="Male" />
            <span>Male</span>
            <br />
            <Input type="radio" id="sex" name="female" label="Female" />
            <span>Female</span>
          </div>

          <div className="form-group">
            <h4>Date of Birth</h4>
            <Input type="date" name="age" id="age" placeholder="age" />
          </div>

          <div className="form-group">
            <h4>State</h4>
            <Input type="select" name="state" id="state" placeholder="state">
              {" "}
              <option>--select your state--</option>
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Akwa Ibom</option>
              <option>Anambra</option>
              <option>Bauchi</option>
            </Input>
          </div>

          <div className="form-group">
            <h4>LGA</h4>
            <Input
              type="text"
              name="lga"
              id="lga"
              placeholder="Local Government Area"
            />
          </div>

          <div className="form-group">
            <h4>Address</h4>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="address"
            />
          </div>

          <div className="form-group">
            <h4>Age</h4>
            <Input
              type="text"
              name="age"
              id="age"
              placeholder="Enter your age"
            />
          </div>

          <div className="form-group">
            <h4>Email</h4>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <h4>Phone number</h4>
            <Input
              type="number"
              name="pNumber"
              id="pNumber"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group food_items">
            <h4>Food items given?</h4>
            <Input type="radio" id="foodYes" name="food" label="food" />
            <span>Yes</span>
            <br />
            <Input type="radio" id="foodNo" name="food" label="food" />
            <span>No</span>
            <br />
            <Input type="radio" id="foodOther" name="food" label="food" />
            <span>
              Other <Input type="text" name="food" />
            </span>
          </div>

          <div className="form-group medical">
            <h4>
              Medical conditions <span style={{ color: "red" }}>*</span>
            </h4>
            <Input type="radio" id="sick" name="sick" label="sick" />
            <span>Sick</span>
            <br />
            <Input
              type="radio"
              id="physically"
              name="physically"
              label="physically"
            />
            <span>Phycically challenge</span>
            <br />
            <Input type="radio" id="healthy" name="healthy" label="healthy" />
            <span>Healthy</span>
          </div>

          <div className="form-group educated">
            <h4>Educated?</h4>
            <Input type="radio" id="eduYes" name="eduYes" label="eduYes" />
            <span>Yes</span>
            <br />
            <Input type="radio" id="eduNo" name="eduNo" label="eduNo" />
            <span>No</span>
          </div>

          <div className="form-group nursing">
            <h4>Nursing mother/Pregnant/Nil?</h4>
            <Input type="radio" id="nMother" name="nMother" label="nMother" />
            <span>Nursing mother</span>
            <br />
            <Input
              type="radio"
              id="pregnant"
              name="pregnant"
              label="pregnant"
            />
            <span>Pregnant</span>
            <br />
            <Input type="radio" id="nil" name="nil" label="nil" />
            <span>Nil</span>
          </div>

          <div className="form-group remarks">
            <h4>
              Remarks <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="textarea"
              name="remarks"
              label="remarks"
              placeholder="Enter your answer"
            />
          </div>
          <div className="flexImageFinger" >
          <div className="passport">
            <h6>Passport</h6>
          </div>
          <div className="finger">   <h6>Fingerprint</h6></div>
        
          </div>
          <div className="submit">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
         
        </form>
      </div>
    </Container>
  );
};

export default DataCollection;
