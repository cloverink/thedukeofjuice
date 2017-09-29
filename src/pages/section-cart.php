<section id="section-cart">
  <h3 class="title bg-black">shopping cart</h3>
  <div class="cart">

    <table>
      <thead>
        <tr>
          <th>product name</th>
          <th>unit price</th>
          <th>qty</th>
          <th>subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>blue heaven</td>
          <td>$12.50</td>
          <td>
            <form>
              <input type="text" value="1" readonly="true">
            </form>
            <a href="#!" class="btn btn-sky btn-ok">OK</a>
            <a href="#!" class="btn-edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
          </td>
          <td>$12.50</td>
          <td>
            <a href="#!" class="del"></a>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5">

            <div class="float-left">
              <a href="#!" class="btn btn-sky">Continue Shopping</a>
            </div>


            <div class="float-right">
              <a href="#!" class="btn btn-sky">Empty Cart</a>
              <span>- OR -</span>
              <a href="#!" class="btn btn-sky">Update Cart</a>
            </div>

          </td>
        </tr>
      </tfoot>

    </table>

  </div>
  <div class="container">
    <div>

      <div class="">
        <h4>enter the gift card code</h4>
        <form>
          <input type="text">
        </form>
        <div class="clear">
          <a href="#!" class="btn btn-sky float-left">Check Gift Card status and balance</a>
          <a href="#!" class="btn btn-sky float-right">Add Gift Card</a>
        </div>
      </div>

      <div class="estimate">
        <h4>estimate shipping and tax</h4>

        <form>
          <div>
            <label>country</label>
            <input type="text">
          </div>
          <div>
            <label>postcode</label>
            <input type="text">
          </div>
        </form>

        <form>
          <div>
            <label>State/Province</label>
            <input type="text">
          </div>
          <div>
            <span> * Required Field </span>
            <a href="#!" class="btn btn-sky">Estimate</a>
          </div>
        </form>

      </div>


    </div>
    <div>

      <div class="grand-total">
        <div class="subtotal">Subtotal <span>$12.50</span></div>
        <div class="incgst">Inc. GST <span>$0.89</span></div>
        <div class="hr"></div>
        <div class="grandtotal">
          Grand Total <span>$12.50</span>
        </div>
        <a href="#!" class="btn btn-sky btn-checkout">Process to Checkout</a>
      </div>

    </div>
  </div>
</section>