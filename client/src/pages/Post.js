import React from "react";
import "./Post.css"

const Post = props =>
    <div>
        <div class="container">
            <form>
                <h3>Post your item!</h3>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Name your item</label>
                <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                <br />
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Category of your item</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Camping</option>
                        <option>Sporting Goods</option>
                        <option>Nautical</option>
                        <option>Tools</option>
                    </select>
                </div>
                <br />
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Add a description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br />
                <div class="form-group">
                    <label for="exampleFormControlFile1">Attach a photo of your item</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>
                <br />
                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">Confirm your email</label>
                <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                <br />
                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Your password</label>
                <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
                <br />
                <div className="text-center mt-4">
                    <button className="btn btn-unique" type="submit">Post your item!!</button>
                </div>
            </form>
        </div>
    </div>
export default Post;