import React from "react";
import { Link } from "react-router-dom";
import "./Interact.css";

const Interact = () =>
    // possible html + css styling below...

    // <div className=".mx-auto px-4"/>
    // <div className="mx-auto">

    <div className="d-flex justify-content-center" id="interact-box">

        <div className="col-1">
        </div>

        <div className="col-2">
        </div>

        {/* ------------------------------------------------------------------------------------------------------
                                        Inquire Tab 

------------------------------------------------------------------------------------------------------ */}
        <div className="col-1">
            {/* <a className="btn btn-primary btn-md" id="inquire-btn" href="">Inquire</a> */}

            {/* <button type="button" class="btn btn-primary" id="confirm-btn" data-toggle="modal" data-target="#inquireModal">
                Inquire
            </button> */}

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Inquire
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Contact Information</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">


                            <form class="needs-validation" novalidate>
                                <div class="form-row">


                                    <div class="col-md-3 mb-3">
                                        <label for="validationCustom01">First Name
                        </label>
                                        <input type="text" class="form-control" id="validationCustom01" placeholder="First Name" required>
                                        </input>

                                        <div class="invalid-feedback">
                                            Please provide a valid first name.
                        </div>
                                    </div>


                                    <div class="col-md-3 mb-3">
                                        <label for="validationCustom02">Last Name</label>
                                        <input type="text" class="form-control" id="validationCustom02" placeholder="Last Name" required>
                                        </input>

                                        <div class="invalid-feedback">
                                            Please provide a valid email
                        </div>
                                    </div>

                                </div>
                            </form>


                            <form class="needs-validation" novalidate>
                                <div class="form-row">


                                    <div class="col-md-3 mb-3">
                                        <label for="validationCustom03">Phone Number
                        </label>
                                        <input type="text" class="form-control" id="validationCustom03" placeholder="XXX-XXX-XXX" required>
                                        </input>

                                        <div class="invalid-feedback">Please provide a valid phone number.
                        </div>
                                    </div>


                                    <div class="col-md-3 mb-3">
                                        <label for="validationCustom04">e-mail</label>
                                        <input type="text" class="form-control" id="validationCustom04" placeholder="e-mail" required>
                                        </input>

                                        <div class="invalid-feedback">            Please provide a valid email
                        </div>
                                    </div>
                                </div>
                            </form>



                            <form class="needs-validation" novalidate>
                                <div class="form-row">


                                    <div class="col-md-3 mb-3">
                                        <label for="validationCustom05">City
                        </label>
                                        <input type="text" class="form-control" id="validationCustom05" placeholder="City" required>
                                        </input>

                                        <div class="invalid-feedback">        Please provide a valid city.
                        </div>
                                    </div>


                                    <div class="col-md-3 mb-3">
                                        <label for="validationCustom06">State</label>
                                        <input type="text" class="form-control" id="validationCustom06" placeholder="State" required>
                                        </input>

                                        <div class="invalid-feedback">            Please provide a valid st
                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <label for="validationCustom07">Zip</label>
                                        <input type="text" class="form-control" id="validationCustom07" placeholder="Zip" required>
                                        </input>
                                        <div class="invalid-feedback">
                                            Please provide a valid zip.
                             </div>
                                    </div>
                                </div>
                            </form>


                            <form>
                                <div class="form-group">


                                    {/* <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                    </input> */}


                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Message:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                </div>
                            </form>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Send message to owner</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="col-1">
        </div>

        <div className="col-1">
        </div>






        {/* ------------------------------------------------------------------------------------------------------
                                        Review Tab 

------------------------------------------------------------------------------------------------------ */}

        <div className="col-1">
            <button type="button" class="btn btn-primary" id="view-btn" data-toggle="modal" data-target="#exampleModalLong">
                Reviews
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" id="review-modal-title">
                            <h5 class="modal-title" id="exampleModalLongTitle">Buyer/Item Review</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {/* <div class="modal-body"> */}
                        <div class="modal-dialog" id="buyer-item-modal">
                            Hello,

                            My name is ronaldo Deguzman. I am sitting at starbucks right now doing my coding project.  Currently, I am working on a modal pop up.  There is one issue however.  Right now the text inside the modal pop up does not stay within the modal box.  I wonder why that is?  I am going to manipulate the modal html.  If i do not find a resolution that way, I will create a html element id and put specific id paramaters such as text staying within the box.  I do not recall the text code or function but I will use the wrap function to accomplish this goal.

                            <br />
                            I just refreshed the page with the goal of how the html takes the paragraph above.  The text remained inside of the modal.  When I use react's state ability and set te webapge to the database, I will hope that the database infromation store will remain inside of the modal box. Right now the most apparent issue is the create a paragarph / line break in the html code.
                            </div>


                        {/* <!-- Add icon library --> */}
                        <div className="container">
                            <div className="row">
                                Leave a rating:
                                <div className="col-6" id="bonfire-div">

                                    <div className="rating">
                                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                                    </div>





                                    {/* <ion-icon
                                        className="none" size="large" id="bonfireIcon" name="bonfire">


                                    </ion-icon>

                                    <ion-icon className="none" size="large" id="bonfireIcon" name="bonfire"></ion-icon>

                                    <ion-icon
                                        className="none"
                                        size="large" id="bonfireIcon" name="bonfire"></ion-icon>

                                    <ion-icon
                                        className="none" size="large" id="bonfireIcon" name="bonfire"></ion-icon>

                                    <ion-icon
                                        className="none" size="large" id="bonfireIcon" name="bonfire"></ion-icon> */}



                                </div>
                            </div>
                        </div>



                        {/* <i class="material-icons">
                                    star_rate
                                </i>
                                <i class="material-icons">
                                    star_rate
                                </i>
                                <i class="material-icons">
                                    star_rate
                                </i>
                                <i class="material-icons">
                                    star_rate
                                </i> */}




                        {/* <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span> */}



                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Message:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-2">
        </div>




        {/* ------------------------------------------------------------------------------------------------------
                                        Confirm Tab 

------------------------------------------------------------------------------------------------------ */}

        <div className="col-2">
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" id="confirm-btn" data-toggle="modal" data-target="#confirmModal">
                Confirm
                </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="confirmModal" tabindex="1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="confirmModal">Confirm Rental</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Clicking "Ok" will confirm your rental.
                                </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-2">
        </div>

    </div>

export default Interact;