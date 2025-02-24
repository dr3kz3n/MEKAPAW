document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".image-container");

    products.forEach((product) => {
        const imgElement = product.querySelector(".product-image");
        let images = [];
        let currentIndex = 0;

        // Determinar las imágenes para este producto
        if (product.getAttribute("data-index") === "0") {
            images = ["/img/ferulacarpo01.webp", "/img/ferulacarpo02.webp"]; // 2 imágenes
        } else if (product.getAttribute("data-index") === "1") {
            images = ["/img/ferulacarvejon01.jpg", "/img/ferulacarvejon02.jpg"]; // 2 imágenes
        } else if (product.getAttribute("data-index") === "2") {
            images = ["/img/ferulacorta01.webp", "/img/ferulacorta02.webp"]; // 3 imágenes
        } else if (product.getAttribute("data-index") === "3") {
            images = ["/img/ferulatarso01.webp", "/img/ferulatarso02.webp"]; // 3 imágenes
        } else if (product.getAttribute("data-index") === "4") {
            images = ["/img/ferulalarga01.webp", "/img/ferulalarga02.webp"]; // 3 imágenes
        } else if (product.getAttribute("data-index") === "5") {
            images = ["/img/ferulaajustable01.png", "/img/ferulaajustable02.jpg"]; // 3 imágenes
        } else if (product.getAttribute("data-index") === "6") {
            images = ["/img/tablilla01.jpg", "/img/tablilla02.png"]; // 3 imágenes
        }

        // Establecer la imagen predeterminada
        imgElement.src = images[0];

        function updateImage(direction) {
            currentIndex += direction;
            if (currentIndex < 0) currentIndex = images.length - 1;
            if (currentIndex >= images.length) currentIndex = 0;
            imgElement.src = images[currentIndex];
        }

        product.querySelector(".left").addEventListener("click", () => updateImage(-1));
        product.querySelector(".right").addEventListener("click", () => updateImage(1));

        product.addEventListener("wheel", (event) => {
            if (event.deltaY < 0) {
                updateImage(-1);
            } else {
                updateImage(1);
            }
            event.preventDefault();
        });
    });

    window.openImage = function (src) {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.8)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "1000";

        const img = document.createElement("img");
        img.src = src;
        img.style.maxWidth = "80%";
        img.style.maxHeight = "80%";
        img.style.borderRadius = "10px";

        overlay.appendChild(img);
        overlay.addEventListener("click", () => document.body.removeChild(overlay));

        document.body.appendChild(overlay);
    };

    // Información de los tamaños
    const sizeInfo = {
        XXS: {
            dimensiones: "<b>Dimensiones:</b> 6 cm (alto) x 3 cm (ancho) x 2 cm (profundidad)",
            peso: "<b>Peso:</b> 30 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XS: {
            dimensiones: "<b>Dimensiones:</b> 8 cm (alto) x 4 cm (ancho) x 2.5 cm (profundidad)",
            peso: "<b>Peso:</b> 45 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        S: {
            dimensiones: "<b>Dimensiones:</b> 10 cm (alto) x 5 cm (ancho) x 3 cm (profundidad)",
            peso: "<b>Peso:</b> 60 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        M: {
            dimensiones: "<b>Dimensiones:</b> 12 cm (alto) x 6 cm (ancho) x 4 cm (profundidad)",
            peso: "<b>Peso:</b> 80 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        L: {
            dimensiones: "<b>Dimensiones:</b> 14 cm (alto) x 7 cm (ancho) x 4.5 cm (profundidad)",
            peso: "<b>Peso:</b> 100 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XL: {
            dimensiones: "<b>Dimensiones:</b> 16 cm (alto) x 8 cm (ancho) x 5 cm (profundidad)",
            peso: "<b>Peso:</b> 120 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XXL: {
            dimensiones: "<b>Dimensiones:</b> 18 cm (alto) x 9 cm (ancho) x 5.5 cm (profundidad)",
            peso: "<b>Peso:</b> 140 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        }
    };
    const sizeInfo2 = {         
    XXS: {
        dimensiones: "<b>Dimensiones:</b>8 cm (alto) × 4 cm (ancho) × 0.4 cm(profundidad)",
        peso: "<b>Peso:</b> 45 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    XS: {
        dimensiones: "<b>Dimensiones:</b>10 cm (alto) × 5 cm (ancho) × 0.5 cm(profundidad)",
        peso: "<b>Peso:</b> 60 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    S: {
        dimensiones: "<b>Dimensiones:</b>12 cm (alto) × 6 cm (ancho) × 0.6 cm(profundidad)",
        peso: "<b>Peso:</b> 80 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    M: {
        dimensiones: "<b>Dimensiones:</b>14 cm (alto) × 7 cm (ancho) × 0.7 cm(profundidad)",
        peso: "<b>Peso:</b> 100 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    L: {
        dimensiones: "<b>Dimensiones:</b>16 cm (alto) × 8 cm (ancho) × 0.8 cm(profundidad)",
        peso: "<b>Peso:</b> 125 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    XL: {
        dimensiones: "<b>Dimensiones:</b>18 cm (alto) × 9 cm (ancho) × 0.9 cm(profundidad)",
        peso: "<b>Peso:</b> 150 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    XXL: {
        dimensiones: "<b>Dimensiones:</b>20 cm (alto) × 10 cm (ancho) × 1.0 cm(profundidad)",
        peso: "<b>Peso:</b> 180 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    }
    }; // Copia de sizeInfo para el producto 2
    const sizeInfo3 = {
        XXS: {
            dimensiones: "<b>Dimensiones:</b>6 cm (alto) × 3 cm (ancho) × 2 cm (profundidad)",
            peso: "<b>Peso:</b> 45 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XS: {
            dimensiones: "<b>Dimensiones:</b>7 cm (alto) × 3.5 cm (ancho) × 2.2 cm (profundidad)",
            peso: "<b>Peso:</b> 55 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        S: {
            dimensiones: "<b>Dimensiones:</b>9 cm (alto) × 4.5 cm (ancho) × 2.5 cm (profundidad)",
            peso: "<b>Peso:</b> 65 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        M: {
            dimensiones: "<b>Dimensiones:</b>14 cm (alto) × 7 cm (ancho) × 0.7 cm(profundidad)",
            peso: "<b>Peso:</b> 70 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        L: {
            dimensiones: "<b>Dimensiones:</b>16 cm (alto) × 8 cm (ancho) × 0.8 cm(profundidad)",
            peso: "<b>Peso:</b> 85 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XL: {
            dimensiones: "<b>Dimensiones:</b>18 cm (alto) × 9 cm (ancho) × 0.9 cm(profundidad)",
            peso: "<b>Peso:</b> 110 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XXL: {
            dimensiones: "<b>Dimensiones:</b>20 cm (alto) × 10 cm (ancho) × 1.0 cm(profundidad)",
            peso: "<b>Peso:</b> 130 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        }
    }; // Copia de sizeInfo para el producto 3
    const sizeInfo4 = {
        XXS: {
            dimensiones: "<b>Dimensiones:</b>8 cm (alto) x 4 cm (ancho) x 2.5 cm (profundidad)",
            peso: "<b>Peso:</b> 45 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XS: {
            dimensiones: "<b>Dimensiones:</b>10 cm (alto) x 5 cm (ancho) x 3 cm (profundidad)",
            peso: "<b>Peso:</b> 55 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        S: {
            dimensiones: "<b>Dimensiones:</b>12 cm (alto) x 6 cm (ancho) x 3.5 cm (profundidad)",
            peso: "<b>Peso:</b> 70 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        M: {
            dimensiones: "<b>Dimensiones:</b>14 cm (alto) x 7 cm (ancho) x 4 cm (profundidad)",
            peso: "<b>Peso:</b> 90 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        L: {
            dimensiones: "<b>Dimensiones:</b>16 cm (alto) x 8 cm (ancho) x 4.5 cm (profundidad)",
            peso: "<b>Peso:</b> 110 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XL: {
            dimensiones: "<b>Dimensiones:</b>18 cm (alto) x 9 cm (ancho) x 5 cm (profundidad)",
            peso: "<b>Peso:</b> 130 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XXL: {
            dimensiones: "<b>Dimensiones:</b>20 cm (alto) x 10 cm (ancho) x 5.5 cm (profundidad)",
            peso: "<b>Peso:</b> 150 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        }
    }; // Copia de sizeInfo para el producto 4
    const sizeInfo5 = {
        XXS: {
            dimensiones: "<b>Dimensiones:</b>10 cm (alto) x 4 cm (ancho) x 2.5 cm (profundidad)",
            peso: "<b>Peso:</b> 50 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XS: {
            dimensiones: "<b>Dimensiones:</b>12 cm (alto) x 5 cm (ancho) x 3 cm (profundidad)",
            peso: "<b>Peso:</b> 65 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        S: {
            dimensiones: "<b>Dimensiones:</b>14 cm (alto) x 6 cm (ancho) x 3.5 cm (profundidad)",
            peso: "<b>Peso:</b> 85 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        M: {
            dimensiones: "<b>Dimensiones:</b>16 cm (alto) x 7 cm (ancho) x 4 cm (profundidad)",
            peso: "<b>Peso:</b> 105 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        L: {
            dimensiones: "<b>Dimensiones:</b>18 cm (alto) x 8 cm (ancho) x 4.5 cm (profundidad)",
            peso: "<b>Peso:</b> 125 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XL: {
            dimensiones: "<b>Dimensiones:</b>20 cm (alto) x 9 cm (ancho) x 5 cm (profundidad)   ",
            peso: "<b>Peso:</b> 145 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XXL: {
            dimensiones: "<b>Dimensiones:</b>22 cm (alto) x 10 cm (ancho) x 5.5 cm (profundidad)",
            peso: "<b>Peso:</b> 165 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        }
    }; // Copia de sizeInfo para el producto 5
    const sizeInfo6 = {        
    XXS: {
        dimensiones: "<b>Dimensiones:</b>9-11 cm (alto) x 3.5 cm (ancho) x 2.5 cm (profundidad)",
        peso: "<b>Peso:</b> 55 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    XS: {
        dimensiones: "<b>Dimensiones:</b>11-13 cm (alto) x 4.5 cm (ancho) x 3 cm (profundidad)",
        peso: "<b>Peso:</b> 70 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    S: {
        dimensiones: "<b>Dimensiones:</b>13-16 cm (alto) x 5.5 cm (ancho) x 3.5 cm (profundidad)",
        peso: "<b>Peso:</b> 90 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    M: {
        dimensiones: "<b>Dimensiones:</b>15-18 cm (alto) x 6.5 cm (ancho) x 4 cm (profundidad)",
        peso: "<b>Peso:</b> 110 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    L: {
        dimensiones: "<b>Dimensiones:</b>17-21 cm (alto) x 7.5 cm (ancho) x 4.5 cm (profundidad)",
        peso: "<b>Peso:</b> 130 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    XL: {
        dimensiones: "<b>Dimensiones:</b>19-23 cm (alto) x 8.5 cm (ancho) x 5 cm (profundidad)",
        peso: "<b>Peso:</b> 150 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    },
    XXL: {
        dimensiones: "<b>Dimensiones:</b>21-25 cm (alto) x 9.5 cm (ancho) x 5.5 cm (profundidad)",
        peso: "<b>Peso:</b> 170 g",
        materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
    }
}; // Copia de sizeInfo para el producto 6
    const sizeInfo7 = {
        XXS: {
            dimensiones: "<b>Dimensiones:</b>7 cm (alto) x 3 cm (ancho) x 0.5 cm (profundidad)",
            peso: "<b>Peso:</b> 20 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XS: {
            dimensiones: "<b>Dimensiones:</b>9 cm (alto) x 3.5 cm (ancho) x 0.6 cm (profundidad)",
            peso: "<b>Peso:</b> 30 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        S: {
            dimensiones: "<b>Dimensiones:</b>11 cm (alto) x 4 cm (ancho) x 0.7 cm (profundidad)",
            peso: "<b>Peso:</b> 40 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        M: {
            dimensiones: "<b>Dimensiones:</b>13 cm (alto) x 4.5 cm (ancho) x 0.8 cm (profundidad)",
            peso: "<b>Peso:</b> 50 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        L: {
            dimensiones: "<b>Dimensiones:</b>15 cm (alto) x 5 cm (ancho) x 0.9 cm (profundidad)",
            peso: "<b>Peso:</b> 60 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XL: {
            dimensiones: "<b>Dimensiones:</b>17 cm (alto) x 5.5 cm (ancho) x 1 cm (profundidad)",
            peso: "<b>Peso:</b> 70 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        },
        XXL: {
            dimensiones: "<b>Dimensiones:</b>19 cm (alto) x 6 cm (ancho) x 1.1 cm (profundidad)",
            peso: "<b>Peso:</b> 80 g",
            materiales: "<b>Materiales:</b> Biopolímero de cáscara de cacahuate, Almidón de papa, Refuerzos de fibra natural, Espuma de celda cerrada, Nylon, Sellador biodegradable, Caucho en la base, Metal"
        }
    }; // Copia de sizeInfo para el producto 7

    // Manejo de los botones de medidas
    const sizeButtons = document.querySelectorAll(".Medidas .button");
    const sizeButtons2 = document.querySelectorAll(".Medidas2 .button");
    const sizeButtons3 = document.querySelectorAll(".Medidas3 .button");
    const sizeButtons4 = document.querySelectorAll(".Medidas4 .button");
    const sizeButtons5 = document.querySelectorAll(".Medidas5 .button");
    const sizeButtons6 = document.querySelectorAll(".Medidas6 .button");
    const sizeButtons7 = document.querySelectorAll(".Medidas7 .button");

    const productDescription = document.getElementById("product-description");
    const productDescription2 = document.getElementById("product-description-2");
    const productDescription3 = document.getElementById("product-description-3");
    const productDescription4 = document.getElementById("product-description-4");
    const productDescription5 = document.getElementById("product-description-5");
    const productDescription6 = document.getElementById("product-description-6");
    const productDescription7 = document.getElementById("product-description-7");

    let selectedSize = "L"; // Tamaño predeterminado: L

    function updateProductInfo(size, descriptionElement, info) {
        const productInfo = info[size];
        descriptionElement.innerHTML = `
            <p>${productInfo.dimensiones}</p>
            <p>${productInfo.peso}</p>
            <p>${productInfo.materiales}</p>
        `;
    }

    function selectButton(buttons, button, descriptionElement, info) {
        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedSize = button.getAttribute("data-size");
        updateProductInfo(selectedSize, descriptionElement, info);
    }

    sizeButtons.forEach(button => {
        button.addEventListener("click", () => {
            selectButton(sizeButtons, button, productDescription, sizeInfo);
        });
    });

    sizeButtons2.forEach(button => {
        button.addEventListener("click", () => {
            selectButton(sizeButtons2, button, productDescription2, sizeInfo2);
        });
    });

    sizeButtons3.forEach(button => {
        button.addEventListener("click", () => {
            selectButton(sizeButtons3, button, productDescription3, sizeInfo3);
        });
    });

    sizeButtons4.forEach(button => {
        button.addEventListener("click", () => {
            selectButton(sizeButtons4, button, productDescription4, sizeInfo4);
        });
    });

    sizeButtons5.forEach(button => {
        button.addEventListener("click", () => {
            selectButton(sizeButtons5, button, productDescription5, sizeInfo5);
        });
    });

    sizeButtons6.forEach(button => {
        button.addEventListener("click", () => {
            selectButton(sizeButtons6, button, productDescription6, sizeInfo6);
        });
    });

    sizeButtons7.forEach(button => {
        button.addEventListener("click", () => {
            selectButton(sizeButtons7, button, productDescription7, sizeInfo7);
        });
    });

    // Establecer el tamaño predeterminado: L
    const defaultButton = document.querySelector(`.Medidas .button[data-size="${selectedSize}"]`);
    selectButton(sizeButtons, defaultButton, productDescription, sizeInfo);
    document.addEventListener("DOMContentLoaded", function () {
        // ... (código de la Parte 1 y Parte 2) ...
    
        // Manejo de los botones "Agregar al carro" y "Comprar ahora"
        const addToCartButton = document.querySelector(".add-to-cart");
        const buyNowButton = document.querySelector(".buy-now");
        const quantityInput = document.getElementById("quantity");
    
        const addToCartButton2 = document.querySelector(".add-to-cart-2");
        const buyNowButton2 = document.querySelector(".buy-now-2");
        const quantityInput2 = document.getElementById("quantity-2");
    
        const addToCartButton3 = document.querySelector(".add-to-cart-3");
        const buyNowButton3 = document.querySelector(".buy-now-3");
        const quantityInput3 = document.getElementById("quantity-3");
    
        const addToCartButton4 = document.querySelector(".add-to-cart-4");
        const buyNowButton4 = document.querySelector(".buy-now-4");
        const quantityInput4 = document.getElementById("quantity-4");
    
        const addToCartButton5 = document.querySelector(".add-to-cart-5");
        const buyNowButton5 = document.querySelector(".buy-now-5");
        const quantityInput5 = document.getElementById("quantity-5");
    
        const addToCartButton6 = document.querySelector(".add-to-cart-6");
        const buyNowButton6 = document.querySelector(".buy-now-6");
        const quantityInput6 = document.getElementById("quantity-6");
    
        const addToCartButton7 = document.querySelector(".add-to-cart-7");
        const buyNowButton7 = document.querySelector(".buy-now-7");
        const quantityInput7 = document.getElementById("quantity-7");
    
        addToCartButton.addEventListener("click", () => {
            const quantity = quantityInput.value;
            const selectedSize = document.querySelector(".Medidas .button.selected").getAttribute("data-size");
            console.log(`Producto 1 agregado al carro: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        buyNowButton.addEventListener("click", () => {
            const quantity = quantityInput.value;
            const selectedSize = document.querySelector(".Medidas .button.selected").getAttribute("data-size");
            console.log(`Compra realizada para Producto 1: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        addToCartButton2.addEventListener("click", () => {
            const quantity = quantityInput2.value;
            const selectedSize = document.querySelector(".Medidas2 .button.selected").getAttribute("data-size");
            console.log(`Producto 2 agregado al carro: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        buyNowButton2.addEventListener("click", () => {
            const quantity = quantityInput2.value;
            const selectedSize = document.querySelector(".Medidas2 .button.selected").getAttribute("data-size");
            console.log(`Compra realizada para Producto 2: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        addToCartButton3.addEventListener("click", () => {
            const quantity = quantityInput3.value;
            const selectedSize = document.querySelector(".Medidas3 .button.selected").getAttribute("data-size");
            console.log(`Producto 3 agregado al carro: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        buyNowButton3.addEventListener("click", () => {
            const quantity = quantityInput3.value;
            const selectedSize = document.querySelector(".Medidas3 .button.selected").getAttribute("data-size");
            console.log(`Compra realizada para Producto 3: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        addToCartButton4.addEventListener("click", () => {
            const quantity = quantityInput4.value;
            const selectedSize = document.querySelector(".Medidas4 .button.selected").getAttribute("data-size");
            console.log(`Producto 4 agregado al carro: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        buyNowButton4.addEventListener("click", () => {
            const quantity = quantityInput4.value;
            const selectedSize = document.querySelector(".Medidas4 .button.selected").getAttribute("data-size");
            console.log(`Compra realizada para Producto 4: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        addToCartButton5.addEventListener("click", () => {
            const quantity = quantityInput5.value;
            const selectedSize = document.querySelector(".Medidas5 .button.selected").getAttribute("data-size");
            console.log(`Producto 5 agregado al carro: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        buyNowButton5.addEventListener("click", () => {
            const quantity = quantityInput5.value;
            const selectedSize = document.querySelector(".Medidas5 .button.selected").getAttribute("data-size");
            console.log(`Compra realizada para Producto 5: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        addToCartButton6.addEventListener("click", () => {
            const quantity = quantityInput6.value;
            const selectedSize = document.querySelector(".Medidas6 .button.selected").getAttribute("data-size");
            console.log(`Producto 6 agregado al carro: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        buyNowButton6.addEventListener("click", () => {
            const quantity = quantityInput6.value;
            const selectedSize = document.querySelector(".Medidas6 .button.selected").getAttribute("data-size");
            console.log(`Compra realizada para Producto 6: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        addToCartButton7.addEventListener("click", () => {
            const quantity = quantityInput7.value;
            const selectedSize = document.querySelector(".Medidas7 .button.selected").getAttribute("data-size");
            console.log(`Producto 7 agregado al carro: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    
        buyNowButton7.addEventListener("click", () => {
            const quantity = quantityInput7.value;
            const selectedSize = document.querySelector(".Medidas7 .button.selected").getAttribute("data-size");
            console.log(`Compra realizada para Producto 7: Cantidad ${quantity}, Tamaño: ${selectedSize}`);
        });
    });
});