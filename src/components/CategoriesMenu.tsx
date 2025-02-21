import { Popover, Text } from '@radix-ui/themes';
import { CameraIcon, HeadphonesIcon, WatchIcon, CarIcon, GlassesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Watches', icon: WatchIcon },
  { name: 'Minicars', icon: CarIcon },
  { name: 'Headphones', icon: HeadphonesIcon },
  { name: 'Cameras', icon: CameraIcon },
  { name: 'Sunglasses', icon: GlassesIcon }
];

const CategoriesMenu = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Text weight={'medium'}>Categories</Text>
      </Popover.Trigger>
      <Popover.Content className="w-64 bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 p-4">
        <div className="grid gap-4">
          {categories.map((category) => (
            <Link to={`/productLists/${category.name}`} key={category.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <category.icon className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
              <span className="text-gray-900 font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default CategoriesMenu;
