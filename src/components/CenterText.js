import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation
} from "mdbreact";

export default function CenterText () {
    return (
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center">
            <MDBContainer className="text-center">
                <h1 className="h1-responsive font-weight-bold mt-sm-5 white-text">
                    MALE
                    <span className="fade-text">MALDIVES</span>
                </h1>
            </MDBContainer>
          </MDBMask>
        </MDBView>
    )
}
