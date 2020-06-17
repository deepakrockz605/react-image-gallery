import React, { PureComponent } from "react";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [
        {
          index: 1,
          category: "Mountain",
          fileName: "Mountain/mountain1.jpg",
        },
        {
          index: 2,
          category: "Mountain",
          fileName: "Mountain/mountain2.jpg",
        },
        {
          index: 3,
          category: "Mountain",
          fileName: "Mountain/mountain3.jpg",
        },
        {
          index: 4,
          category: "Mountain",
          fileName: "Mountain/mountain4.jpg",
        },
        {
          index: 5,
          category: "Mountain",
          fileName: "Mountain/mountain5.jpg",
        },
        {
          index: 6,
          category: "Mountain",
          fileName: "Mountain/mountain6.jpg",
        },
        {
          index: 7,
          category: "Mountain",
          fileName: "Mountain/mountain7.jpg",
        },
        {
          index: 8,
          category: "Mountain",
          fileName: "Mountain/mountain8.jpg",
        },
        {
          index: 9,
          category: "Beaches",
          fileName: "Beach/Beach1.jpg",
        },
        {
          index: 10,
          category: "Beaches",
          fileName: "Beach/Beach2.jpg",
        },
        {
          index: 11,
          category: "Beaches",
          fileName: "Beach/Beach3.jpg",
        },
        {
          index: 12,
          category: "Beaches",
          fileName: "Beach/Beach4.jpg",
        },
        {
          index: 13,
          category: "Beaches",
          fileName: "Beach/Beach5.jpg",
        },
        {
          index: 14,
          category: "Beaches",
          fileName: "Beach/Beach6.jpg",
        },
        {
          index: 15,
          category: "Birds",
          fileName: "Bird/Bird1.jpg",
        },
        {
          index: 16,
          category: "Birds",
          fileName: "Bird/Bird2.jpg",
        },
        {
          index: 17,
          category: "Birds",
          fileName: "Bird/Bird3.jpg",
        },
        {
          index: 18,
          category: "Birds",
          fileName: "Bird/Bird4.jpg",
        },
        {
          index: 19,
          category: "Birds",
          fileName: "Bird/Bird5.jpg",
        },
        {
          index: 20,
          category: "Birds",
          fileName: "Bird/Bird6.jpg",
        },
        {
          index: 21,
          category: "Birds",
          fileName: "Bird/Bird7.jpg",
        },
        {
          index: 22,
          category: "Birds",
          fileName: "Bird/Bird8.jpg",
        },
        {
          index: 23,
          category: "Food",
          fileName: "Food/Food1.jpg",
        },
        {
          index: 24,
          category: "Food",
          fileName: "Food/Food2.jpg",
        },
        {
          index: 25,
          category: "Food",
          fileName: "Food/Food3.jpg",
        },
        {
          index: 26,
          category: "Food",
          fileName: "Food/Food4.jpg",
        },
        {
          index: 27,
          category: "Food",
          fileName: "Food/Food5.jpg",
        },
        {
          index: 28,
          category: "Food",
          fileName: "Food/Food6.jpg",
        },
        {
          index: 29,
          category: "Food",
          fileName: "Food/Food7.jpg",
        },
      ],
      currentClick: "Mountain",
      filterdGallery: "",
      inputValue: "",
    };
  }

  componentDidMount = (e) => {
    let filterdGallery = this.state.gallery.filter(
      (category) => category.category === this.state.currentClick
    );
    this.setState({
      filterdGallery,
      inputValue: this.state.currentClick,
    });
  };

  handleGalleryCategory = async (e) => {
    await this.setState({
      currentClick: e.target.id,
    });
    let filterdGallery = this.state.gallery.filter(
      (category) => category.category === this.state.currentClick
    );
    this.setState({
      filterdGallery,
      inputValue: this.state.currentClick,
    });
  };

  handleSearchGallery = async (e) => {
    await this.setState({
      inputValue: e.target.value,
    });

    if (this.state.inputValue.length <= 0) {
      this.setState({
        currentClick: "All",
      });
    }

    let filterdGallery = this.state.gallery.filter((category) =>
      category.category.toLowerCase().includes(this.state.inputValue)
    );

    console.log(filterdGallery)

    this.setState({
      filterdGallery,
    });

    const op = this.state.inputValue.toLowerCase();

    switch (op) {
      case "mountain":
        return this.setState({ currentClick: "Mountain" });
      case "beaches":
        return this.setState({ currentClick: "Beaches" });
      case "birds":
        return this.setState({ currentClick: "Birds" });
      case "food":
        return this.setState({ currentClick: "Food" });
      default:
        this.setState({ currentClick: "All" });
    }
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="dashboard-wrapper">
            <div className="searchBar">
              <input
                type="text"
                className="searchGallery"
                onChange={this.handleSearchGallery}
                placeholder="Search..."
                value={this.state.inputValue}
              />
            </div>
            <div className="sortable-buttons">
              <button
                id="Mountain"
                onClick={this.handleGalleryCategory}
                className={
                  this.state.currentClick === "Mountain" ? "active" : ""
                }
              >
                Mountain
              </button>
              <button
                id="Beaches"
                onClick={this.handleGalleryCategory}
                className={
                  this.state.currentClick === "Beaches" ? "active" : ""
                }
              >
                Beaches
              </button>
              <button
                id="Birds"
                onClick={this.handleGalleryCategory}
                className={this.state.currentClick === "Birds" ? "active" : ""}
              >
                Birds
              </button>
              <button
                id="Food"
                onClick={this.handleGalleryCategory}
                className={this.state.currentClick === "Food" ? "active" : ""}
              >
                Food
              </button>
            </div>
            <div className="gallery">
              {this.state.filterdGallery.length <= 0 ? (
                <h1 className="text-center">No Pictures to Show</h1>
              ) : (
                <>
                  <h1 className="text-center">
                    {this.state.currentClick} Pictures
                  </h1>
                  <ul>
                    {this.state.filterdGallery.map((item, e) => {
                      return (
                        <li key={item.index}>
                          <img
                            src={require(`../assets/images/${item.fileName}`)}
                            alt=""
                          />
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
